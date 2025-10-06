export function Footer() {
  return (
      <footer className="border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div
              className="flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Deun. All rights reserved.
            </p>

            <nav className="flex gap-6">
              <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
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
