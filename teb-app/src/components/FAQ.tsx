import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

const FAQ = ({ items }: FAQProps) => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ofte Stilte Spørsmål
        </h2>
        <p className="text-lg text-white/60">
          Alt du trenger å vite om oss
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {items.map((item) => {
          const isOpen = openId === item.id

          return (
            <div
              key={item.id}
              className="border-b border-white/10 pb-4"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-start justify-between gap-4 text-left group py-4"
              >
                <span className="text-lg font-medium text-white group-hover:text-teb-orange transition-colors">
                  {item.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/20 group-hover:border-teb-orange transition-all">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </span>
              </button>

              {/* Answer - with smooth height animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white/70 pb-4 pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
