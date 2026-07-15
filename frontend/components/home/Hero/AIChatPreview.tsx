import { Bot, User, Sparkles } from "lucide-react";

export default function AIChatPreview() {
  return (
    <div className="relative w-full max-w-lg mx-auto">

      {/* Glow Background */}

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">

              <Bot size={22} />

            </div>

            <div>

              <h3 className="font-semibold text-slate-900">

                Commerce AI

              </h3>

              <p className="text-xs text-emerald-500">

                ● Online

              </p>

            </div>

          </div>

          <Sparkles className="text-blue-600" size={22} />

        </div>

        {/* Messages */}

        <div className="space-y-5 p-6">

          {/* Student */}

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">

              <User size={18} />

            </div>

            <div className="rounded-2xl bg-slate-100 px-4 py-3">

              <p className="text-sm">

                Explain Partnership Accounts in simple Hindi.

              </p>

            </div>

          </div>

          {/* AI */}

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">

              <Bot size={18} />

            </div>

            <div className="rounded-2xl bg-blue-50 px-4 py-3">

              <p className="text-sm leading-7 text-slate-700">

                Partnership means two or more persons agree to run a business
                together and share profit or loss according to their agreement.

              </p>

            </div>

          </div>

          {/* Typing */}

          <div className="flex items-center gap-2 pl-14">

            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce"></span>

            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce delay-150"></span>

            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce delay-300"></span>

          </div>

        </div>

      </div>

    </div>
  );
}