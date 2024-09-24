import BasePageComponent from "../components/BasePageComponent";

const HomePage = () => {
    return (
        <BasePageComponent>
            <div className="d-flex justify-content-center">
                <h1 className="text-center">FlowBoard</h1>
            </div>
            <div className="d-flex justify-content-center">
                <p className="text-center">FlowBoard is a seamless project management tool that integrates directly with GitHub to streamline your workflow. It provides a dynamic board interface similar to Trello, where tasks and issues are managed effortlessly.</p>
            </div>
        </BasePageComponent>
    );
}

export default HomePage;
