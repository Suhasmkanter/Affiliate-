"use client"

import {
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Globe,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef } from "react"

export default function InstagramStyleLayout() {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const socialScrollRef = useRef < HTMLDivElement > (null)

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-100" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-100" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-100" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-100" },
    { icon: Globe, href: "#", label: "Website", color: "hover:bg-gray-100" },
    { icon: ShoppingBag, href: "#", label: "Shop", color: "hover:bg-green-100" },
  ]

  const affiliateProducts = [
    {
      id: 1,
      title: "Wireless Noise-Canceling Headphones",
      image: "/placeholder.svg?height=250&width=250",
      price: "$299",
      originalPrice: "$399",
      affiliate: "https://example.com/affiliate1",
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      image: "/placeholder.svg?height=250&width=250",
      price: "$199",
      originalPrice: "$249",
      affiliate: "https://example.com/affiliate2",
    },
    {
      id: 3,
      title: "Ergonomic Office Chair",
      image: "/placeholder.svg?height=250&width=250",
      price: "$449",
      originalPrice: "$599",
      affiliate: "https://example.com/affiliate3",
    },
    {
      id: 4,
      title: "Premium Coffee Maker",
      image: "/placeholder.svg?height=250&width=250",
      price: "$179",
      originalPrice: "$229",
      affiliate: "https://example.com/affiliate4",
    },
    {
      id: 5,
      title: "Portable Power Bank",
      image: "/placeholder.svg?height=250&width=250",
      price: "$49",
      originalPrice: "$69",
      affiliate: "https://example.com/affiliate5",
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      image: "/placeholder.svg?height=250&width=250",
      price: "$89",
      originalPrice: "$119",
      affiliate: "https://example.com/affiliate6",
    },
  ]

  const handleSocialScroll = (direction) => {
    if (socialScrollRef.current) {
      const scrollAmount = 200
      const newScrollLeft = socialScrollRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
      socialScrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })

      // Update scroll button states
      setTimeout(() => {
        if (socialScrollRef.current) {
          setCanScrollLeft(socialScrollRef.current.scrollLeft > 0)
          setCanScrollRight(
            socialScrollRef.current.scrollLeft <
            socialScrollRef.current.scrollWidth - socialScrollRef.current.clientWidth,
          )
        }
      }, 300)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner Ad */}
      <div className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center sticky top-0 z-30">
        <div className="text-white text-sm font-medium">
          🎉 Flash Sale: Up to 60% Off Selected Items - Limited Time!
        </div>
      </div>

      {/* Sticky Sidebar Ad - Desktop Only */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 w-36 h-[400px] bg-white border border-gray-200 rounded-lg shadow-lg hidden lg:flex flex-col items-center justify-center z-20">
        <div className="text-center p-4">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-3">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <div className="text-xs font-semibold text-gray-800 mb-2">Exclusive Deals</div>
          <div className="text-xs text-gray-600 mb-3">Save up to 50%</div>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1">
            Shop Now
          </Button>
        </div>
      </div>

      {/* Sticky Footer Ad - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-center lg:hidden z-30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-800">Limited Time Offers</div>
            <div className="text-xs text-gray-600">Tap to save big today!</div>
          </div>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            View Deals
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 pb-20 lg:pb-6">
        {/* Instagram-Style Profile Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          {/* Desktop Layout - Stacked */}
          <div className="hidden md:block text-center">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Alex Chen"
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Alex Chen</h1>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              Tech enthusiast & lifestyle curator sharing my favorite finds and honest reviews
            </p>

            {/* Social Links - Desktop */}
            <div className="flex justify-center gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Side by Side */}
          <div className="md:hidden">
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Alex Chen"
                className="w-20 h-20 rounded-full object-cover border-3 border-gray-100 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-bold text-gray-900 mb-1">Alex Chen</h1>
                <p className="text-sm text-gray-600 mb-3">Tech enthusiast & lifestyle curator sharing favorite finds</p>

                {/* Social Links - Mobile Scrollable */}
                <div className="relative">
                  <div
                    ref={socialScrollRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center transition-all flex-shrink-0 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-gray-700" />
                      </a>
                    ))}
                  </div>

                  {/* Scroll buttons for mobile */}
                  {canScrollLeft && (
                    <button
                      onClick={() => handleSocialScroll("left")}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                  {canScrollRight && (
                    <button
                      onClick={() => handleSocialScroll("right")}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate Picks Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Affiliate Picks</h2>
            <div className="text-sm text-gray-500">Curated recommendations</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {affiliateProducts.map((product, index) => (
              <div key={product.id}>
                {/* In-feed Ad every 4th item */}
                {(index + 1) % 4 === 0 && (
                  <Card className="mb-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Special Partnership</h3>
                      <p className="text-sm text-gray-600 mb-4">Exclusive deals from our trusted partners</p>
                      <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        Explore Offers
                      </Button>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Sale
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>

                      <Button
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                        onClick={() => window.open(product.affiliate, "_blank")}
                      >
                        Buy Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Get notified about new product recommendations and exclusive deals</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
