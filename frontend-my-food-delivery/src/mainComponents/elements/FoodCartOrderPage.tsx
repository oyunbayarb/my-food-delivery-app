import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {ShoppingCart} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CartDetailsPage} from "./CartDetailPage";

const App = () => {
  return <ShoppingCart />;
};

export default App;

export const FoodCartOrderPage = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open Here</SheetTrigger>
        <SheetContent className="flex p-1">
          <SheetHeader className="flex gap-5">
            <SheetTitle className="flex-row flex gap-2">
              <ShoppingCart className="text-white" />
              <h1 className="text-white">Cart Detail</h1>
            </SheetTitle>
            <SheetDescription className="flex gap-5 flex-col">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="w-full rounded-3xl">
                  <TabsTrigger value="cart" className="w-[50%] rounded-full">
                    Cart
                  </TabsTrigger>
                  <TabsTrigger value="order" className="w-[50%] rounded-full">
                    Order
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="cart" className="w-full h-fit">
                  <CartDetailsPage />
                </TabsContent>
                <TabsContent value="order">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
