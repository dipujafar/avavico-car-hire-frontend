import OrderDetailsContainer from "@/components/shared/order-details-page-components/OrderDetailsContainer";


export const metadata = {
  title: "Order Details",
  description: "Order Details page of Avavico car hire",
}

const OrderDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

  const { id } = await params;

  return  <OrderDetailsContainer id={id}/>
};

export default OrderDetailsPage;
