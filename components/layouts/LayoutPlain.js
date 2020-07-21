import Navbar from '../Navbar'

const Layout = (props)=> (
    <div>
        <Navbar />
        <div>
            {props.children}
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

        <style jsx>{`
         @import url('https://fonts.googleapis.com/css2?family=Exo:wght@700&display=swap');
         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

        .bg-light{
            background-color:F7F7F7 !important;
        }
        .clearance{
            max-width: 1000px;
            margin: 0 auto;
            padding-top: 65px;
        }
        `}</style>
    </div>
)

export default Layout;