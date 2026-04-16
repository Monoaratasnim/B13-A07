export default function Footer() {
  return (
    <footer className="bg-[#132c26] text-white py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">KeenKeeper</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          {/* Social Icons (using placeholders) */}
          {['Youtube', 'Facebook', 'Twitter'].map(social => (
            <div key={social} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer">
              <span className="text-[10px]">{social[0]}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-[11px] text-gray-500">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}