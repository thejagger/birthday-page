import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Label} from "./ui/label";
import {Textarea} from "./ui/textarea";
import {supabase} from "@/lib/supabase-client";

// Form validation schema
const signupSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  amount: z.coerce.number().int().min(1, "Amount must be at least 1"),
  description: z.string().max(500, "Description is too long").optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SESSION_KEY = "birthday_signup_session";

export function SignupDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      amount: 1,
      description: "",
    },
  });

  // Check if user has already signed up
  useEffect(() => {
    const sessionId = sessionStorage.getItem(SESSION_KEY);
    if (sessionId) {
      setHasSignedUp(true);
    }
  }, []);

  // Generate or retrieve session ID
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  };

  const onSubmit = async (data: SignupFormData) => {
    if (hasSignedUp) {
      setError("You have already signed up!");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const sessionId = getSessionId();

      const {error: supabaseError} = await supabase
          .from("birthday_signup")
          .insert({
            session_id: sessionId,
            name: data.name,
            amount: data.amount,
            description: data.description || null,
          });

      if (supabaseError) {
        throw supabaseError;
      }

      // Mark as signed up
      setHasSignedUp(true);
      setSuccess(true);
      reset();

      // Close dialog after 2 seconds
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Error signing up:", err);
      setError(
          err instanceof Error
              ? err.message
              : "Failed to sign up. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset form and errors when closing
      reset();
      setError(null);
      setSuccess(false);
    }
    setOpen(newOpen);
  };

  return (
      <AlertDialog open={open} onOpenChange={handleOpenChange}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            {hasSignedUp ? "Let's party" : "🎉 RSVP"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Sign Up for the Birthday Party!</AlertDialogTitle>
            <AlertDialogDescription>
              {hasSignedUp
                  ? "You have already signed up for this party. Thank you!"
                  : "Fill in your details to RSVP for the party."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          {!hasSignedUp && !success && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      disabled={isSubmitting}
                  />
                  {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Number of Guests *</Label>
                  <Input
                      id="amount"
                      type="number"
                      min="1"
                      placeholder="1"
                      {...register("amount")}
                      disabled={isSubmitting}
                  />
                  {errors.amount && (
                      <p className="text-sm text-red-500">{errors.amount.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Message (optional)</Label>
                  <Textarea
                      id="description"
                      placeholder="Any dietary restrictions or special requests?"
                      rows={3}
                      {...register("description")}
                      disabled={isSubmitting}
                  />
                  {errors.description && (
                      <p className="text-sm text-red-500">
                        {errors.description.message}
                      </p>
                  )}
                </div>

                {error && (
                    <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-3">
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {error}
                      </p>
                    </div>
                )}

                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isSubmitting}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                      type="submit"
                      disabled={isSubmitting}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                      }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
          )}

          {success && (
              <div className="py-6">
                <div
                    className="rounded-md bg-green-50 dark:bg-green-900/20 p-4 text-center">
                  <p className="text-lg font-medium text-green-600 dark:text-green-400">
                    🎉 Successfully signed up! See you at the party!
                  </p>
                </div>
              </div>
          )}

          {hasSignedUp && !success && (
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialog>
  );
}
