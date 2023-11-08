class SubscriptionMailer < ApplicationMailer
  default from: 'dondenoncourt@gmail.com'

  def confirmation(subscriber)
    @subscriber = subscriber
    mail(to: @subscriber.email, subject: 'Subscription Confirmation')
  end
end
