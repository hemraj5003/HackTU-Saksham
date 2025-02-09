import type { ForwardRefExoticComponent } from "react";
import type { LucideProps } from "lucide-react";
import type { RefAttributes } from "react";
type Role={
    id:string;
    name:string;
    description:string;
}

type FeatureCard={
    title: string;
    icon:  ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    highlights: Array<string>;
    details:string;
    href:string|null;
    requirements:string|null;
}

interface AccessTokenResponse{
    access_token:string;
    expires_in:number;
    token_type:string;
}

export type {Role,AccessTokenResponse,FeatureCard}