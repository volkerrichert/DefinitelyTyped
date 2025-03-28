import * as React from "react";
import WithSizes, { Sizes } from "react-sizes";

interface TestProps {
    foo: string;
    width: number;
    height: number;
}

const mapSizesToProps = ({ width, height }: Sizes) => ({
    width,
    height,
});

const TestComponent: React.ComponentType<TestProps> = ({ foo, width, height }) => {
    foo; // $ExpectType string
    width; // $ExpectType number
    height; // $ExpectType number
    return (
        <div>
            <p>Foo: {foo}</p>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );
};

WithSizes<ReturnType<typeof mapSizesToProps>, TestProps>(mapSizesToProps)(TestComponent); // $ExpectType ComponentType<Omit<TestProps, "width" | "height">>
