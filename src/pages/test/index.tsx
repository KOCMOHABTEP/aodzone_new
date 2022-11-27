import Layout from "@/layouts/Layout/Layout";
import Input from "@/components/Input/Input";
import { useState } from "react";

const NewsPage = () => {
    const [userValue, setUserValue] = useState("");

    const handleInputChange = event => {
        setUserValue(event.target.value);
    };

    return (
        <Layout title="AOD Zone | test">
            <Input name="test" value={userValue} onChange={handleInputChange} />
            <Input
                name="test"
                value={userValue}
                onChange={handleInputChange}
                required
            />
            <Input
                name="test"
                value={userValue}
                onChange={handleInputChange}
                required
                error={{ valid: true, message: "Описание ошибки" }}
            />
            <Input
                name="test"
                value={userValue}
                onChange={handleInputChange}
                hint="Обязательно заполните поле"
            />
            <Input
                name="test"
                value={userValue}
                onChange={handleInputChange}
                hint="Обязательно заполните поле"
                disabled
            />
        </Layout>
    );
};

export default NewsPage;
