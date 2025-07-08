"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Orders from "./Orders";

const OrderPageContainer = () => {
  
  return (
    <Tabs defaultValue="orders">
      <TabsList className="grid w-full gap-x-3 grid-cols-4 border-b-4 bg-transparent rounded-none ">
        <TabsTrigger
          value="orders"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none  data-[state=active]:border-b-4  data-[state=active]:border-b-primary-cyan rounded-none "
        >
          Orders
        </TabsTrigger>
        <TabsTrigger
          value="processing"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none  data-[state=active]:border-b-4  data-[state=active]:border-b-primary-cyan rounded-none "
        >
          Processing
        </TabsTrigger>
        <TabsTrigger
          value="completed"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none  data-[state=active]:border-b-4  data-[state=active]:border-b-primary-cyan rounded-none "
        >
          Completed
        </TabsTrigger>
        <TabsTrigger
          value="canceled"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none  data-[state=active]:border-b-4  data-[state=active]:border-b-primary-cyan rounded-none "
        >
          Canceled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="orders">
        <Orders status="pending"></Orders>
      </TabsContent>
      <TabsContent value="processing">
        <Orders status="in progress"></Orders>
      </TabsContent>
      <TabsContent value="completed">
        <Orders status="completed"></Orders>
      </TabsContent>
      <TabsContent value="canceled">
        <Orders status="canceled"></Orders>
      </TabsContent>
    </Tabs>
  );
};

export default OrderPageContainer;
