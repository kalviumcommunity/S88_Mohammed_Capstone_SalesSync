import '../App.css';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} SalesSync. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
