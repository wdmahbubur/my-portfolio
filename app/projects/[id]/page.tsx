import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProjectDetail } from '@/components/project-detail';
import { portfolioData } from '@/data/portfolio';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Portfolio | Mahbubur Rahman`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
