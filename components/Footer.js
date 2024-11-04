const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white flex items-center justify-center px-4 h-16 md:text-base text-xs">
            <p className="text-center">Copyright &copy; {currentYear} Get Me A Chai - Fund your projects with Chai!</p>
        </footer>
    )
}

export default Footer