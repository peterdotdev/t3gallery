const mockUrls = [
  "https://utfs.io/f/44443010-c42f-4d59-be9f-213c14de5a70-a4xxa5.jpg",
  "https://utfs.io/f/a2e0bc0d-9fd6-4d39-916a-1b1c112b9d19-a4xxa6.jpg",
  "https://utfs.io/f/c31b740c-8602-41d0-87b4-ecb847782efa-a4xxa7.jpg",
  "https://utfs.io/f/c2d15726-017f-40ad-8d29-c5ee6c7eb39d-a4xxa8.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
