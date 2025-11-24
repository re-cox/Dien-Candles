import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_ACCESS_TOKEN, MOCK_INSTAGRAM_POSTS } from '../constants';
import { InstagramPost } from '../types';

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // If no token is provided, fall back immediately to mock data
      if (!INSTAGRAM_ACCESS_TOKEN) {
        setPosts(MOCK_INSTAGRAM_POSTS);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`
        );
        
        if (!response.ok) {
          throw new Error('Instagram fetch failed');
        }

        const data = await response.json();
        setPosts(data.data.slice(0, 6)); // Ensure only 6 posts
      } catch (error) {
        console.warn('Using mock Instagram data due to API error:', error);
        setPosts(MOCK_INSTAGRAM_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Instagram className="w-8 h-8 text-stone-800 mb-4" />
          <h2 className="text-3xl font-serif text-stone-800 mb-2">Instagram'da Bizi Takip Edin</h2>
          <p className="text-stone-500 text-sm max-w-md">
            Yeni koleksiyonlarımızı ve konsept mumlarımızı önce Instagram'da paylaşıyoruz.
            <a href="#" className="text-stone-800 font-medium ml-1">@diencandles</a>
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center h-48 items-center text-stone-400">
            Yükleniyor...
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {posts.map((post) => (
              <a 
                key={post.id} 
                href={post.permalink} 
                target="_blank" 
                rel="noreferrer"
                className="group relative block overflow-hidden aspect-square bg-stone-200"
              >
                <img 
                  src={post.media_type === 'VIDEO' ? 'https://picsum.photos/400/400' : post.media_url} 
                  alt={post.caption || 'Instagram Post'} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;