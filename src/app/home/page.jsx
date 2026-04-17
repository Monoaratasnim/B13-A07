import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import { getFriends } from "@/lib/getFriends";

export const metadata = {
  title: "Home - Keen Keeper",
  description: "Welcome to Keen Keeper -your ultimate friend management app.",
};

export default async function Home() {
  const friends = await getFriends();

  return (
    <div>
      {/* IMPORTANT: pass friends */}
      <Banner friends={friends} />

      <div className="px-4 md:px-8 py-10">
        <h2 className="font-semibold mb-6 text-lg">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends?.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />
          ))}
        </div>
      </div>
    </div>
  );
}