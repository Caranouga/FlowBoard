import Header from "./Header";

const BasePage = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default BasePage;
