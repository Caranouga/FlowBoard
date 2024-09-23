import HeaderComponent from "./header/HeaderComponent";

const BasePageComponent = (props: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderComponent />
            <div className="container py-5">
                {props.children}
            </div>
        </>
    );
}

export default BasePageComponent;