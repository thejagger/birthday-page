import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const blocks = [
  {
    title: "The Venue",
    description:
        "Join us at a cozy lakeside cabin surrounded by nature. Perfect for a relaxing weekend getaway with friends!",
    image: "https://source.unsplash.com/random/800x600?cabin",
  },
  {
    title: "The Food",
    description:
        "Expect a delicious barbecue, fresh salads, and sweet treats — all homemade and crafted with love.",
    image: "https://source.unsplash.com/random/800x600?bbq",
  },
  {
    title: "The Music",
    description:
        "Dance, chill, or just vibe! We'll have a mix of live acoustic tunes and a DJ set to keep the night going.",
    image: "https://source.unsplash.com/random/800x600?music",
  },
  {
    title: "The Memories",
    description:
        "Let’s capture the best moments together! There will be a photo booth and a cozy campfire to end the night.",
    image: "https://source.unsplash.com/random/800x600?friends",
  },
]

export default function PartyInfoBlocks() {
  return (
      <section className="space-y-16 py-20">
        {blocks.map((block, i) => (
            <motion.div
                key={i}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                    i % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
            >
              {/* Image */}
              <Card className={`overflow-hidden ${i % 2 === 1 ? "order-last md:order-none" : ""}`}>
                <CardContent className="p-0">
                  <img
                      src={block.image}
                      alt={block.title}
                      className="w-full h-80 object-cover"
                  />
                </CardContent>
              </Card>

              {/* Text */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{block.title}</h2>
                <p className="text-muted-foreground text-lg">{block.description}</p>
              </div>
            </motion.div>
        ))}
      </section>
  )
}
