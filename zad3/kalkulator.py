import tkinter as tk

class Kalkulator:
    def __init__(self, master):
        self.liczba_pierwsza = None
        self.operacja = None

        self.ekran = tk.Entry(master, width=30, justify="right")
        self.ekran.grid(row=0, column=0, columnspan=4, padx=5, pady=5)

        przyciski = [
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
        ]

        row = 1
        col = 0

        for tekst in przyciski:
            if tekst == "":
                continue

            if tekst.isdigit() or tekst == ".":
                przycisk = tk.Button(master, text=tekst, width=7, height=2, command=lambda t=tekst: self.liczba(t))
            else:
                przycisk = tk.Button(master, text=tekst, width=7, height=2, command=lambda t=tekst: self.oper(t))

            przycisk.grid(row=row, column=col, padx=3, pady=3)

            col += 1
            if col > 3:
                col = 0
                row += 1

    def liczba(self, tekst):
        self.ekran.insert("end", tekst)

    def oper(self, tekst):
        self.liczba_pierwsza = float(self.ekran.get())
        self.operacja = tekst
        self.ekran.delete(0, "end")

    def wynik(self):
        liczba_druga = float(self.ekran.get())
        self.ekran.delete(0, "end")

        if self.operacja == "+":
            wynik = self.liczba_pierwsza + liczba_druga
        elif self.operacja == "-":
            wynik = self.liczba_pierwsza - liczba_druga
        elif self.operacja == "*":
            wynik = self.liczba_pierwsza * liczba_druga
        elif self.operacja == "/":
            try:
                wynik = self.liczba_pierwsza / liczba_druga
            except ZeroDivisionError:
                wynik = "Nie można dzielić przez zero!"

        self.ekran.insert("end", wynik)


root = tk.Tk()
root.title("Kalkulator")

kalkulator = Kalkulator(root)

przycisk_wynik = tk.Button(root, text="=", width=7, height=2, command=kalkulator.wynik)
przycisk_wynik.grid(row=5, column=2, padx=3, pady=3)

root.mainloop()
