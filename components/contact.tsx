"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations"
import { Send, CheckCircle, Loader2 } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white"> Entrons en</span>
            <span className="text-scifi-cyan">contact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-scifi-cyan to-scifi-magenta mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez collaborer ? N’hésitez pas à mes contacter !
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="gradient-border">
            <CardHeader>
              <CardTitle className="font-orbitron text-xl text-scifi-cyan">
                Envoye un Message
              </CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et&apos;je vous recontacterai dès que possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="h-16 w-16 text-scifi-green mb-4" />
                  <h3 className="font-orbitron text-xl text-scifi-green mb-2">
                    Message Envoyé avec succès!
                  </h3>
                  <p className="text-gray-400">
                    Merci de m'avoir contacté. Je vous répondrai dès que possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nom <span className="text-scifi-magenta">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        className={errors.name ? "border-scifi-magenta" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-scifi-magenta">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-scifi-magenta">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register("email")}
                        className={errors.email ? "border-scifi-magenta" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-scifi-magenta">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Sujet <span className="text-scifi-magenta">*</span>
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Demande de projet"
                      {...register("subject")}
                      className={errors.subject ? "border-scifi-magenta" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-scifi-magenta">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-scifi-magenta">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-scifi-magenta" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-scifi-magenta">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

