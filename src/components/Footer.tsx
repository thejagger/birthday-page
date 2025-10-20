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
import {Button} from "./ui/button";
import {Apple, Play} from "lucide-react";

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

export function AlertDialogTermsService() {
  return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </a>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hi it's me jakob, the owner of deun.app</AlertDialogTitle>
            <AlertDialogDescription>
              If you like what you see, just download the app.
              <div className="flex flex-col gap-4 sm:flex-row mt-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://apps.apple.com/us/app/deun/id6742751703" aria-label="Download on the App Store">
                    <Apple className="h-5 w-5"/>
                    App Store
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://play.google.com/store/apps/details?id=app.deun.www" aria-label="Get it on Google Play">
                    <Play className="h-5 w-5"/>
                    Google Play
                  </a>
                </Button>
              </div>
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
              <AlertDialogTermsService />
            </nav>
          </div>
        </div>
      </footer>
  );
}
