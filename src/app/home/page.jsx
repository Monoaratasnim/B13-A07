import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import { getFriends } from "@/lib/getFriends";

export default async function Home() {
  const friends = await getFriends();

  return (
    <div>
      <Navbar />
      <Banner />

      <div className="px-8 pb-12">
        <h2 className="font-semibold mb-4">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends?.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}