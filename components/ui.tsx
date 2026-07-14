import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function ButtonLink({href,children,secondary=false}:{href:string;children:React.ReactNode;secondary?:boolean}){return <Link className={`btn ${secondary?"btn-secondary":"btn-primary"}`} href={href}>{children}<ArrowRight size={17}/></Link>}
export function SectionHeading({eyebrow,title,copy}:{eyebrow:string;title:string;copy?:string}){return <div style={{maxWidth:760,marginBottom:"2rem"}}><div className="eyebrow">{eyebrow}</div><h2 className="title" style={{margin:".55rem 0"}}>{title}</h2>{copy&&<p className="lead">{copy}</p>}</div>}
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav aria-label="Breadcrumb" style={{fontSize:14,color:"#64748b",marginBottom:"1.5rem"}}>{items.map((x,i)=><span key={x.label}>{i>0&&" / "}{x.href?<Link href={x.href}>{x.label}</Link>:x.label}</span>)}</nav>}
