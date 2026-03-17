import BlogDetailsMain from '@/components/containers/blog/BlogDetailsMain';
import BlogSingleBanner from '@/components/layout/banner/BlogSingleBanner';
import Layout from '@/components/layout/Layout';
import { notFound } from 'next/navigation';

export default async function BlogPage(props: PageProps<'/blogs/[slug]'>) {
  const params = await props.params;

  if (!params.slug) {
    notFound();
  }

  return (
    <Layout header={2} footer={5} video={0}>
      <BlogSingleBanner />
      <BlogDetailsMain slug={params.slug} />
    </Layout>
  );
}
