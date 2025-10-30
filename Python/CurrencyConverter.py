#import exchange_rates


try:
    import exchange_rates
except ImportError:
    from types import SimpleNamespace
    # Fallback rates — replace with real values or a proper exchange_rates module
    exchange_rates = SimpleNamespace(
        USD_TO_EUR=0.92,
        USD_TO_GBP=0.78,
        USD_TO_JPY=144.0
    )

def convert_usd_to_eur(amount):
    return amount * exchange_rates.USD_TO_EUR

def convert_usd_to_gbp(amount):
    return amount * exchange_rates.USD_TO_GBP

def convert_usd_to_jpy(amount):
    return amount * exchange_rates.USD_TO_JPY

def main():
    usd_amount = 100
    
    eur_amount = convert_usd_to_eur(usd_amount)
    gbp_amount = convert_usd_to_gbp(usd_amount)
    jpy_amount = convert_usd_to_jpy(usd_amount)
    
    print(f"USD {usd_amount} is equal to:")
    print(f"- EUR {eur_amount}")
    print(f"- GBP {gbp_amount}")
    print(f"- JPY {jpy_amount}")

if __name__ == "__main__":
    main()