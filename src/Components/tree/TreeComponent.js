import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

const treeData = [
  {
    id: 'parent',
    label: 'Main',
    children: [{ id: 'child1', label: 'Sub Item 1' }, { id: 'child2', label: 'Sub Item 2' }],
  },
];

export default function TreeComponent() {
  return <RichTreeView items={treeData} />;
}
