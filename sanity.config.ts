import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import placementAgent from './schemas/placementAgent';
import fundDeal from './schemas/fundDeal';
import lpInvestor from './schemas/lpInvestor';
import marketInsight from './schemas/marketInsight';
import feeStructure from './schemas/feeStructure';

export default defineConfig({
  name: 'placement-quest',
  title: 'Placement Quest',
  projectId: '7gr5b7wx',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      placementAgent,
      fundDeal,
      lpInvestor,
      marketInsight,
      feeStructure
    ],
  },
});