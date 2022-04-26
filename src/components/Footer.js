import "../index.css";

const Footer = () => {
  return (
       <div className="footer" >
           <div>This project was created by Jonathan Harris and Adam Davidson.</div>
           <div>Check out the links below to see the Projects repository and our personal GitHub accounts</div>
            <ul>   
                <li><a  href="https://github.com/jleviharris">Jonathans GitHub <i className="fa-brands fa-github"></i></a></li>
                <li><a  href="https://github.com/Adamgd91">Adams GitHub <i className="fa-brands fa-github"></i></a></li>
                <li><a  href="https://github.com/jleviharris/devCodeCampYoutubeFrontend.git">Project Repo <i className="fa-brands fa-github"></i></a></li>
            </ul>
    </div>
    
  );
};

export default Footer;