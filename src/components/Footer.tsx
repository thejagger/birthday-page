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
} from "@/components/ui/alert-dialog"

export function AlertDialogPrivacyPolicy() {
  return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Did you really think that we will add a fucking Privacy Policy?</AlertDialogTitle>
            <AlertDialogDescription>
              Anyway while you are here, you can read our Privacy Policy not here.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}


export function Footer() {
  return (
      <footer className="border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div
              className="flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Tanjakob. All rights reserved.
            </p>

            <nav className="flex gap-6">
              <AlertDialogPrivacyPolicy />
              <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </footer>
  );
}
