
function getProducts(callback) {

    const apiUrl = "https://69aa3960e051e9456fa0c2b4.mockapi.io/products";

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            callback(null, data); 
        })
        .catch(function(error) {
            callback(error, null); 
        });
}



function handleProducts(error, data) {

    if (error) {
        console.error("Lỗi khi lấy data:", error);
        return;
    }

    const tableBody = document.getElementById("productTableBody");

    data.forEach(function(product) {

        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}



getProducts(handleProducts);