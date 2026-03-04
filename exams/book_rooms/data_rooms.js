var rooms = []

function addRoom() {
    var name = document.getElementById("name").value.trim();
    var desc = document.getElementById("desc").value.trim();
    var price = document.getElementById("price").value.trim();

    if (price <= 0) {
        errorDiv.innerText = "Giá phải lớn hơn 0";
        return;
    }

    var room = {
        name: name,
        desc: desc,
        price: Number(price),
        image: image
    };

    rooms.push(room);
    renderRooms();
    clearForm();
}

function renderRooms() {
    var room_list = document.getElementById("list");
    room_list.innerHTML = "";

    rooms.forEach((room, index) => {
        room_list.innerHTML += `
            <div class="room-item">
                <strong>${room.name}</strong><br>
                ${room.desc}<br>
                Giá: ${room.price.toLocaleString()} đ
            </div>
        `;
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("price").value = "";
}