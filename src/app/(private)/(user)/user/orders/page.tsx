import OrderPageContainer from './_components/OrderPageContainer';

export const metadata = {
    title: "All Orders",
    description: "User orders page",
}

const OrdersPage = () => {
    return (
        <div>
            <OrderPageContainer></OrderPageContainer>
        </div>
    );
};

export default OrdersPage;