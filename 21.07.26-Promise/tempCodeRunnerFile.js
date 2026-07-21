import confirmOrder from './0-confirm_order'

export default function handleOperation(orderId) {
    return confirmOrder(orderId)
    .then(
        (data) => {console.log(`Order ${data.id} accepted`)}
    )
    .catch(
        (err) => {console.log(`An error occurred: ${err.message}`)}
    )
    .finally(
        () => {console.log("Operation finished")}
    );
}
