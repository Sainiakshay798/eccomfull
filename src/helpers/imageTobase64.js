const imageTobase64= (image)=> {
    const reader =new FileReader()
    reader.readAsDataURL(image)
}