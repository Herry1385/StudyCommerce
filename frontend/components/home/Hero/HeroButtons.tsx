import { Button } from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button size="lg">
        Start Learning
      </Button>

      <Button
        size="lg"
        variant="outline"
      >
        Watch Demo
      </Button>
    </div>
  );
}