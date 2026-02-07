import * as runtime from "react/jsx-runtime";
import { CalloutBox } from "@/components/ui/CalloutBox";
import { Collapsible } from "@/components/ui/Collapsible";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  CalloutBox,
  Collapsible,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-heading text-3xl md:text-5xl" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-heading text-2xl md:text-3xl" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-heading text-xl md:text-2xl" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-sage-dark underline decoration-sage/30 underline-offset-3 transition-colors hover:text-sage hover:decoration-sage"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-sage pl-6 italic text-ink-light" {...props} />
  ),
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="prose prose-lg max-w-none">
      <Component components={components} />
    </div>
  );
}
