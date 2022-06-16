use anchor_lang::prelude::*;
use crate::state::wall::*;
use anchor_spl::token::{TokenAccount, Burn, Mint, Token};
use anchor_spl::token::burn;
use solana_program::pubkey::Pubkey;
use crate::errors::WallErrors;

pub const TOKEN_MINT : Pubkey = solana_program::pubkey!("AQ7GWkiorMLFfTrpdUX2dfkRLp6GPRZaSW7jfThvmQno");


pub fn wall_mint(ctx: Context<WallMint>, title : String, description : String) -> Result<()> {
    let wall : &mut Account<Wall> = &mut ctx.accounts.wall;
    let signer : &Signer = &ctx.accounts.signer;
    let buyer_tokens = &ctx.accounts.buyer_tokens;
    let token_program = &ctx.accounts.token_program;
    
    require_keys_eq!(TOKEN_MINT, ctx.accounts.mint.key(), WallErrors::InvalidTokenError);

    burn(
        CpiContext::new(
            token_program.to_account_info(),
            Burn {
                mint: ctx.accounts.mint.to_account_info(),
                from: buyer_tokens.to_account_info(),
                authority: signer.to_account_info(),
            },
        ),
        500 * 1000000000,
    )?;

    wall.authority = *signer.key;
    wall.title = title;
    wall.description = description; 
    Ok(())
}

#[derive(Accounts)]
pub struct WallMint<'info> {
    #[account(init,
        payer = signer,
        space = Wall::LEN
    )]
    pub wall : Account<'info, Wall>,

    #[account(mut)]
    pub signer : Signer<'info>,

    #[account(mut, address = TOKEN_MINT)]
    pub mint: Account<'info, Mint>,

    #[account(mut, token::mint = TOKEN_MINT,        
        constraint=buyer_tokens.owner == signer.key(),
        constraint=buyer_tokens.mint == mint.key())]
    pub buyer_tokens: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}
