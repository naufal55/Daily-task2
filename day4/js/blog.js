let blogs = []
console.log(blogs);

function addProject(event) {

    event.preventDefault()

    let nProject = document.getElementById('input-project').value
    let sDate = document.getElementById('input-start').value
    let eDate = document.getElementById('input-end').value
    let desc = document.getElementById('input-description').value
    let tech = document.getElementById('input-node').value

    let uImage = document.getElementById('input-image').files

    uImage = URL.createObjectURL(uImage[0]) // untuk menampilkan gambar agar tampil
    let blog = {
        namaProject: nProject,
        startDate: sDate,
        endDate: eDate,
        description:desc,
        techno:tech,
        ImageUpload:uImage
    }

    

    blogs.push(blog)
    console.log(blogs);

    renderProject()
}


function renderProject() {

    document.getElementById('card-detail').innerHTML = ''

    for (let i = 0; i < blogs.length; i++) {
        
        // array[keberapa].property object
        document.getElementById('card-detail').innerHTML +=
        `
        <div class="frame-detail">
            <div class="foto">
                <img src=${blogs[i].ImageUpload}>
            </div>
            <div class="label-foto">
                <h3>${blogs[i].namaProject}</h3>
                <h5>durasi 3 bulan</h5>
                <p>${blogs[i].description.slice(0,100)}... <a href="index.html">read more</a></p>
            </div>
            <div class="icon-tech">
                <i class="fa-brands fa-bootstrap"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-node-js"></i>
            </div>
            <div class="edit-btn">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        `
    }

}