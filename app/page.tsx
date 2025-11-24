import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 dark:from-neutral-950 dark:to-neutral-900">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
            <Construction className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold">Under Construction</CardTitle>
            <CardDescription className="text-base">
              My portfolio is currently being developed. Please check back later to see the final result.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            In the meantime, feel free to visit my current website:
          </p>
          <Button asChild className="w-full sm:w-auto">
            <a
              href="https://henchoznoe.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Visit henchoznoe.ch
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
