import Link from 'next/link';

interface PostCardProps {
  title: string;
  id: string;
}

export default function PostCard({ title, id }: PostCardProps) {
  return (
    <div className="p-4 border rounded">
      <Link href={`/post/${id}`}>
        <h2 className="text-xl">{title}</h2>
      </Link>
    </div>
  );
}