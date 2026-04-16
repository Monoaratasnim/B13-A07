import friends from "@/data/friends.json";

export default function FriendDetails({ params }) {
  const friend = friends.find((f) => f.id === Number(params.id));

  if (!friend) return <div className="p-6">Friend not found</div>;

  return (
    <div className="p-10">
      <img src={friend.picture} className="w-24 h-24 rounded-full" />

      <h1 className="text-3xl font-bold mt-4">{friend.name}</h1>
      <p className="text-gray-600">{friend.email}</p>

      <p className="mt-4">{friend.bio}</p>

      <div className="mt-4">
        <strong>Status:</strong> {friend.status}
      </div>

      <div>
        <strong>Goal:</strong> {friend.goal} days
      </div>
    </div>
  );
}