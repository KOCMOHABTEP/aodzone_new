import cn from "classnames";
import Icon from "@components/Icon/Icon";
import Avatar from "@components/Avatar/Avatar";
import Link from "next/link";
import MatchCard from "@components/MatchCard/MatchCard";
import { Widget } from "../Widget";
import styles from "./WidgetLastMatches.module.css";

interface WidgetLastMatchesProps {
    title: string;
}

export const WidgetLastMatches = ({ title }: WidgetLastMatchesProps) => {
    return (
        <Widget title={title}>
            <MatchCard />
            <MatchCard />
            <MatchCard />
        </Widget>
    );
};
