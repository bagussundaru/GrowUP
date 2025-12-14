import { useState } from "react";
import { Play, X, Camera, Video } from "lucide-react";
import { Button } from "./ui/button";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: "/gallery-1.jpg", alt: "Performance 1" },
    { src: "/gallery-2.jpg", alt: "Performance 2" },
    { src: "/gallery-3.jpg", alt: "Performance 3" },
    { src: "/band-1.jpg", alt: "Band Photo 1" },
    { src: "/band-2.jpg", alt: "Band Photo 2" },
    { src: "/band-3.jpg", alt: "Band Photo 3" },
  ];

  const videos = [
    {
      id: "video1",
      thumbnail: "/gallery-1.jpg",
      title: "Live Performance at Corporate Event",
      duration: "3:45",
    },
    {
      id: "video2",
      thumbnail: "/gallery-2.jpg",
      title: "Wedding Entertainment Highlights",
      duration: "4:20",
    },
    {
      id: "video3",
      thumbnail: "/gallery-3.jpg",
      title: "Acoustic Session - Top 40 Covers",
      duration: "5:12",
    },
  ];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block font-orbitron text-sm text-primary mb-2 tracking-widest">
            GALERI
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-cosmic">Dokumentasi</span>
            <br />
            <span className="text-foreground">Penampilan Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Lihat momen-momen spesial dari berbagai event yang telah kami hibur
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "photo" ? "cosmic" : "glass"}
            onClick={() => setActiveTab("photo")}
          >
            <Camera className="w-4 h-4 mr-2" />
            Foto
          </Button>
          <Button
            variant={activeTab === "video" ? "cosmic" : "glass"}
            onClick={() => setActiveTab("video")}
          >
            <Video className="w-4 h-4 mr-2" />
            Video
          </Button>
        </div>

        {/* Photo Gallery */}
        {activeTab === "photo" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover-glow"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-foreground font-medium">{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                      <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-foreground p-2 hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain rounded-xl glow-primary"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
