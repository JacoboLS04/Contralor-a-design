import imgComponent14 from "figma:asset/6ee9998acec03c91d20a71c573184a757eb352cb.png";
import { Container } from "./container";

export function GovBar() {
  return (
    <div className="bg-[var(--green-dark)] py-2 border-b-2 border-[var(--gold)]">
      <Container>
        <div className="flex items-center justify-center">
          <img 
            src={imgComponent14} 
            alt="GOV.CO" 
            className="h-6"
          />
        </div>
      </Container>
    </div>
  );
}
