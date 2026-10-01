import { Layout } from '@/shared/components/Layout';
import { TasksPanel } from '@/features/tasks';

export default function App() {
  return (
    <Layout>
      <TasksPanel />
    </Layout>
  );
}
