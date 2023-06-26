const footerstyle = {
  backgroundColor: "black",
  color: "white", 
  display: "flex",
  justifyContent: "center",
}
const Footer = () => {
    return (
        <>
            <footer style={footerstyle}>
                &copy; 2021 PizzaVilla All Rights Reserved
            </footer>
        </>
    )
}

export default Footer;