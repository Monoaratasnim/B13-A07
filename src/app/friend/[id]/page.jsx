import { getFriends } from "@/lib/getFriends";
import FriendDetails from "@/components/FriendDetails";

export default async function FriendPage({ params }) {
  const friends = await getFriends();

  const friend = friends.find(
    (f) => f.id === Number(params.id)
  );

  if (!friend) {
    return <div className="p-10 text-center">Friend not found</div>;
  }

  return <FriendDetails friend={friend} />;
}