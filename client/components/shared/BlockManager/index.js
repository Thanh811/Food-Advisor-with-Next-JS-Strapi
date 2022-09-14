import Hero from "../../block/Hero";
import CtaCommandLine from "../../block/CtaCommandLine";

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;
  switch (__component) {
    case "block.hero":
      Block = Hero;
      break;
    case "block.cta-command-line":
      Block = CtaCommandLine;
      break;
  }
  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
