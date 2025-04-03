import { Card, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProfileCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <Skeleton className="w-24 h-24 rounded-full mb-4" />
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-48 mb-2" />
        <Skeleton className="h-3 w-24 mt-1" />
      </div>

      <CardFooter className="flex justify-between p-4 pt-0 gap-2">
        <Skeleton className="h-9 flex-1" />
        <Skeleton className="h-9 flex-1" />
      </CardFooter>
    </Card>
  )
}

